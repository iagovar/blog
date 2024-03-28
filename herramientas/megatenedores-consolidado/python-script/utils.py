def consolidateTypeOfCompany(value):
    publicOwnershipCompany = ["pública", "ayuntamiento"]
    return publicOwnershipCompany.__contains__(str(value).lower())