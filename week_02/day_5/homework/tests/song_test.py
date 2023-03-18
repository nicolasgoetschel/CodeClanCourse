import unittest
from classes.song import Song
from classes.guest import Guest
from classes.room import Room

class TestSong(unittest.TestCase):
    def setUp(self):
        self.song_1 = Song("Zombie", "Clanberries")
        self.song_2 = Song("Sunshine on Leith ", "The Programmers")
        self.song_3 = Song("Streets of Philadelphia", "Bruce Stringsteen")
        self.song_4 = Song("Young, Wild & Free", "Loop Dogg")
        self.song_5 = Song("Tell it like it is", "Array Neville")

        self.room_1 = Room("Mont Blanc", 12, 4, 248)
        self.room_2 = Room("Dufourspitze", 10, 4, 200)
        self.room_3 = Room("Grossglockner", 8, 4, 160)
        self.room_4 = Room("Teide", 6, 4, 128)
        self.room_5 = Room("Ben Nevis", 4, 4, 72)
        
        self.guest_1 = Guest("Alain Berset", 50, 130.50)
        self.guest_2 = Guest("Viola Amherd", 60, 95.00)
        self.guest_3 = Guest("Guy Parmelin", 63, 100.00)
        self.guest_4 = Guest("Ignazio Cassis", 61, 70.00)
        self.guest_5 = Guest("Karin Keller-Sutter", 59, 200.00)
        self.guest_6 = Guest("Albert Rösti", 55, 150.00)
        self.guest_7 = Guest("Elisabeth Baume_Schneider", 59, 110.00)

    def test_song_has_title(self):
        self.assertEqual("Zombie", self.song_1.title)

    def test_song_has_artist(self):
        self.assertEqual("Clanberries", self.song_1.artist)   

   