import unittest
from classes.room import Room
from classes.song import Song
from classes.guest import Guest

class TestRoom(unittest.TestCase):
    def setUp(self):
        # rooms = 
        self.room_1 = Room("Mont Blanc", 12, 4, 248)
        self.room_2 = Room("Dufourspitze", 10, 4, 200)
        self.room_3 = Room("Grossglockner", 8, 4, 160)
        self.room_4 = Room("Teide", 6, 4, 128)
        self.room_5 = Room("Ben Nevis", 4, 4, 72)

        # guests =
        self.guest_1 = Guest("Alain Berset", 50, 130.50)
        self.guest_2 = Guest("Viola Amherd", 60, 95.00)
        self.guest_3 = Guest("Guy Parmelin", 63, 100.00)
        self.guest_4 = Guest("Ignazio Cassis", 61, 70.00)
        self.guest_5 = Guest("Karin Keller-Sutter", 59, 200.00)
        self.guest_6 = Guest("Albert Rösti", 55, 150.00)
        self.guest_7 = Guest("Elisabeth Baume_Schneider", 59, 110.00)

        # songs =
        self.song_1 = Song("Zombie", "Clanberries")
        self.song_2 = Song("Sunshine on Leith ", "The Programmers")
        self.song_3 = Song("Streets of Philadelphia", "Bruce Stringsteen")
        self.song_4 = Song("Young, Wild & Free", "Loop Dogg")
        self.song_5 = Song("Tell it like it is", "Array Neville")

    def test_room_has_name(self):
        self.assertEqual("Mont Blanc", self.room_1.name)

    def test_room_has_capacity(self):
        self.assertEqual(12, self.room_1.capacity)

    def test_room_has_till(self):
        self.assertEqual(248.00, self.room_1.till)    

    def test_increase_till(self):
        self.room_1.increase_till(12 * 4)
        self.assertEqual(296 ,self.room_1.till)

    def test_add_guest(self):
        self.room_1.add_guest(self.guest_1)
        self.assertEqual(1, len(self.room_1.guests))


    def test_add_song(self):
        self.room_1.add_song(self.song_1)
        self.assertEqual(1, len(self.room_1.songs))

    def test_remove_guest(self):
        self.room_1.add_guest(self.guest_1)
        self.room_1.remove_guest(self.guest_1)
        self.assertEqual(0, len(self.room_1.guests))

    # def test_room_has_space(self):
    #     self.room_5.add_guest(self.guest_1)
    #     self.room_5.add_guest(self.guest_2)
    #     self.room_5.add_guest(self.guest_3)
    #     self.room_5.add_guest(self.guest_4)
    #     self.room_5.add_guest(self.guest_5)
    #     self.room_5.add_guest(self.guest_6)
    #     self.room_5.add_guest(self.guest_7)
    #     self.assertEqual(7, len(self.room_5.guests))

    # def test_add_guest_to_full_room(self):
    #     self.room_5.add_guest(self.guest_1)
    #     self.room_5.add_guest(self.guest_2)
    #     self.room_5.add_guest(self.guest_3)
    #     self.room_5.add_guest(self.guest_4)
    #     self.room_5.add_guest(self.guest_5)
    #     # self.room_5.add_guest(self.guest_6)
    #     # self.room_5.add_guest(self.guest_7)
    #     result = self.room_5.add_guest_to_full_room(self.guest_4)
    #     self.assertEqual(result, "Sorry, room is full.")

   



