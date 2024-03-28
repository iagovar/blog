def consolidateTypeOfCompany(value):
    if not value:
        return "Not provided"
    
    value = value.lower()
    stateOwnershipCompany = ["públic", "ayuntamiento"]

    for sentence in stateOwnershipCompany:
        if sentence in value:
            return "Sociedad Pública"

    return "Sociedad Privada"

