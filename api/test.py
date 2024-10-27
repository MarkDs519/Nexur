from sqlalchemy import create_engine, Table, MetaData, Column, text, String
import urllib.parse

params = urllib.parse.quote_plus("Driver={ODBC Driver 18 for SQL Server};Server=tcp:smartcoderhome.database.windows.net,1433;Database=SmartCoderdb;Uid=CloudSA73cf2c29;Pwd={Rockbottom@95};Encrypt=yes;TrustServerCertificate=yes;Connection Timeout=30;")
metadata = MetaData()
conn_str = "mssql+pyodbc:///?odbc_connect=%s" % params
engine_azure = create_engine(conn_str,echo=True)
metadata.create_all(engine_azure)
#connection = engine_azure.connect()


with engine_azure.connect() as connection:
    with connection.begin():
        query = "SELECT * FROM {}"
        result = connection.execute(text(query.format("USERS")))
        for row in result:
            print(f'{row.firstname} {row.lastname} {row.email} {row.username} {row.password}')
    connection.commit()