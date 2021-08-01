const superheroes = [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: 210
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: 220
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: 195
    },
    {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: 186
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: 195
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: 165
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: 145
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: 167
    },
    {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: 220
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: 250
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: 200
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: 1400
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: 200
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: 200
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: 0
    }
    ]

    // gebruik .map, .filter of .reduce

    const namensuperhelden = superheroes.map((item) => item.name)
    console.log("namen van de superhelden ", namensuperhelden)

    const lichtesuperhelden = superheroes.filter((item) => item.weight < 190)
    console.log("superhelden <190 pounds", lichtesuperhelden)

    const superhelden200pounds = superheroes.filter((item) => item.weight == 200)
    const naamsuperhelden200pounds = superhelden200pounds.map((item) => item.name)
    console.log("superhelden 200 pounds", naamsuperhelden200pounds)

    const comics = superheroes.map((item) => item.first_appearance)
    console.log("comics waar de superhelden hun first appearances hebben gehad", comics)

    const DCComics = superheroes.filter((item) => item.publisher == "DC Comics")
    const naamheldenDCComics = DCComics.map((item) => item.name)
    console.log("superhelden van publisher DC Comics", naamheldenDCComics)

    const MarvelComics = superheroes.filter((item) => item.publisher == "Marvel Comics")
    const naamheldenMarvelComics = MarvelComics.map((item) => item.name)
    console.log("superhelden van publisher Marvel Comics", naamheldenMarvelComics)

    const totalgewichtheldenDCComics = DCComics.reduce((currentTotal, item) =>{
        return item.weight + currentTotal
    }, 0)
    console.log("Totaal gewicht van alle DC Comics helden",totalgewichtheldenDCComics)

    const totalgewichtheldenMarvelComics = MarvelComics.reduce((currentTotal, item) =>{
        return item.weight + currentTotal
    }, 0)
    console.log("Totaal gewicht van alle Marvel Comics helden",totalgewichtheldenMarvelComics)

    const gewicht = superheroes.map((item) => item.weight)
    const zwaarste = (Math.max(...gewicht))
    const naamzwaarste = superheroes.filter((item) => item.weight === zwaarste)
    console.log(naamzwaarste)
    