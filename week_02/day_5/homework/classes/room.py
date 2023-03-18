class Room:
    def __init__(self, name, capacity, entry_fee, till):
        self.name = name
        self.capacity = capacity
        self.guests = []
        self.songs = []
        self.entry_fee = entry_fee
        self.till = till

    def increase_till(self, amount):
        self.till += amount

    def add_guest(self, new_guest):
        self.guests.append(new_guest)        


    def add_song(self, new_song):
        self.songs.append(new_song)   

    def remove_guest(self, guest):
        self.guests.remove(guest)        
     
    # def add_guest_to_full_room(self, new_guests):
    #     if len(self.guests) >= self.capacity:
    #         self.guests.append(new_guests)       
    #         return len(self.guests) 
    #     else:
    #         return "Sorry, room is full."


    

