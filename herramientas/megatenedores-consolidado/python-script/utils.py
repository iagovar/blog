def consolidateTypeOfCompany(value):
    stateOwnershipCompany = ["pública", "ayuntamiento"]
    isItStateOwned = stateOwnershipCompany.__contains__(str(value).lower())
    if isItStateOwned:
        return "Sociedad Pública"
    else:
        return "Sociedad Privada"

