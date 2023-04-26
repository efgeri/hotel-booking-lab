use hotel_bookings;
db.dropDatabase()

db.bookings.insertMany([
    {
        name: "Geri",
        email: "geri@yes.com",
        checkedIn: true
    },
    {
        name: "Aneeqa",
        email: "aneeqa@no.com",
        checkedIn: false
    },
    {
        name: "Keith",
        email: "keith@itup.com",
        checkedIn: true
    }
])