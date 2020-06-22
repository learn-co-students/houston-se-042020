const dragons = [
    {
        "id": 1,
        "name": "Toothless",
        "description": "A Night Fury",
        "image":"https://www.wikihow.com/images/b/b2/Draw-Toothless-Step-24.jpg",
        "atWar": false
    },
    {
        "id": 2,
        "name": "Bozar",
        "description": "An uninteresting dragon",
        "image":"https://static.boredpanda.com/blog/wp-content/uploads/2015/05/What-are-dragons-doing-nowadays-fb3.jpg",
        "atWar": false
    },
    {
        "id": 3,
        "name": "Tomar",
        "description": "An interesting dragon",
        "image":"https://media.giphy.com/media/bU660Y0VKPvCE/giphy.gif",
        "atWar": true
    }
  ]

  let title = document.createElement('h1')
  title.append( "Dragons" )

  let dragonList = document.createElement('ul')

  let searchBar = document.createElement('input')
  dragonList.append( searchBar )

  document.body.append(
      title,
      dragonList
  )

  dragons.forEach( dragon => {
        createDragonCard(dragon)
  })

  function createDragonCard(dragon){
    let dragonCard = document.createElement('div')

    let name = document.createElement('h3')
    name.append( dragon.name )

    let description = document.createElement('p')
    description.append( dragon.description )

    let image = document.createElement('img')
    image.src = dragon.image
    image.style.width = "100px"

    dragonCard.append(
        name,
        description,
        image
    )

    dragonList.append(
        dragonCard
    )
  }