import unittest
from classes.guest import Guest
from classes.room import Room
from classes.song import Song

class TestGuest(unittest.TestCase):
    def setUp(self):
        self.guest_1 = Guest("Alain Berset", 50, 130.50)
        self.guest_2 = Guest("Viola Amherd", 60, 95.00)
        self.guest_3 = Guest("Guy Parmelin", 63, 100.00)
        self.guest_4 = Guest("Ignazio Cassis", 61, 70.00)
        self.guest_5 = Guest("Karin Keller-Sutter", 59, 200.00)
        self.guest_6 = Guest("Albert Rösti", 55, 150.00)
        self.guest_7 = Guest("Elisabeth Baume_Schneider", 59, 110.00)


        self.room_1 = Room("Mont Blanc", 12, 4, 248)
        self.room_2 = Room("Dufourspitze", 10, 4, 200)
        self.room_3 = Room("Grossglockner", 8, 4, 160)
        self.room_4 = Room("Teide", 6, 4, 128)
        self.room_5 = Room("Ben Nevis", 4, 4, 72)

        self.song_1 = Song("Zombie", "Clanberries")
        self.song_2 = Song("Sunshine on Leith ", "The Programmers")
        self.song_3 = Song("Streets of Philadelphia", "Bruce Stringsteen")
        self.song_4 = Song("Young, Wild & Free", "Loop Dogg")
        self.song_5 = Song("Tell it like it is", "Array Neville")

    def test_guest_has_name(self):
        self.assertEqual("Alain Berset", self.guest_1.name)

    def test_guest_has_age(self):
        self.assertEqual(50, self.guest_1.age)    

    def test_guest_has_money(self):
        self.assertEqual(130.50, self.guest_1.wallet)      

    def test_remove_money_from_wallet(self):
        self.guest_1.remove_money(self.room_1.entry_fee)
        self.assertEqual(126.50, self.guest_1.wallet)