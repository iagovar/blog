import glob
import os
import polars as pl

import utils as utils


# Load ALL CSV inside ./data and join em together

listOfFiles = glob.glob("../data/sources/*.csv")

# Find common columns between all files
print(f"Found {len(listOfFiles)} files\n\n")

commonColumns = {}

for file in listOfFiles:
    df = pl.read_csv(file)
    
    # If the column is not in the commonColumnsDf, add it to "Column Name" column, and set the amount to 1. If it already exists, increase the amount by 1
    for column in df.columns:
         currentColumn = str(column)
         isIncluded = commonColumns.keys().__contains__(currentColumn)

         if not isIncluded:
             commonColumns[currentColumn] = 1
         else:
             commonColumns[currentColumn] += 1

# Create a dataframe with the commonColumns of which the amount is len(listOfFiles) and add an empty "region" column
             
filteredColumns = []

for key in commonColumns.keys():
    if commonColumns[key] == len(listOfFiles):
        filteredColumns.append(key)

filteredColumns.append("region")
             
finalDf = pl.DataFrame({col: [] for col in filteredColumns})

# Populate the finalDf with the commonColumns from listOfFiles
for file in listOfFiles:
    df = pl.read_csv(file)
    
    # Get the region name from the file name (from last - to .csv)
    regionName = file.split("/")[-1].split(".")[0].replace("grandes-tenedores-", "").capitalize().replace("-", " ")

    # Add the region name to the dataframe
    df = df.with_columns(pl.lit(regionName).alias("region"))

    # Filter deh columns to match the finalDf
    df = df.select(filteredColumns)

    # Append the dataframe to the finalDf
    finalDf = pl.concat(
        [finalDf, df],
        how="vertical_relaxed",
    )

# Consolidate type of company (public/private)

finalDf = finalDf.with_columns(pl.col("Tipo sociedad utilizada").apply(utils.consolidateTypeOfCompany).alias("typeOfCompany"))




# Save all DFs to .TSVs

dataFramesToSave = [
    {"name": "joinedMegatenedores", "df": finalDf},
]

for thisDf in dataFramesToSave:
    thisDf["df"].write_csv(
        file=f"../data/output/{thisDf['name']}.tsv",
        include_header=True,
        separator="\t",
        )


