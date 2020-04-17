import sqlite3
conn = sqlite3.connect('tempa.db')

c = conn.cursor()

# Create table
c.execute('''CREATE TABLE stocks
             (date text, trans text, symbol text, qty real, tempa real)''')
