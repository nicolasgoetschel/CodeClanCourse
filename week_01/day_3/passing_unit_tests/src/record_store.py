def get_name(record_store):
    return record_store["name"]

def find_record_by_title(title, record_store):
    for record in record_store["records"]:
        if record["title"] == title:
            return record

def sell_record(record, record_store):
    # don't need to return anything
    #increase record_store money by price of record
    record_store["money"] += record["price"]
    #remove record from record_store
    record_store["records"].remove(record)