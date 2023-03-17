class Team:
    def __init__(self, name, players, coach):
        self.name = name
        self.players = players
        self.coach = coach
        self.points = 0


    def add_player(self, new_player):    
        self.players.append(new_player)

    def has_player(self, name):
        found_player = False
        for player in self.players:
            if name == player:
                found_player = True
        return found_player
        
    def play_game(self, outcome):
        if outcome == True:
            self.points += 3
