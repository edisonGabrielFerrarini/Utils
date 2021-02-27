module.exports.dateComplete = (date) => {
  const dateConverter = date.split("/")
  const formattedDate = {
    day: dateConverter[0],
    month: dateConverter[1],
    year: dateConverter[2],
  }
  return formattedDate
}

module.exports.monthAndYear = (date) => {
  const dateConverter = date.split("/")
  if(dateConverter.length >= 3) {
    const formattedDate = {
      month: dateConverter[1],
      year: dateConverter[2],
    }
    return formattedDate
  } 
  const formattedDate = {
    month: dateConverter[0],
    year: dateConverter[1],
  }
  return formattedDate
}

module.exports.monthExtensiveToMonthAndYear = (date) => {
  const dateConverter = date.split("/")
  const monthArray = {
    'jan': 1, 
    'fev': 2, 
    'mar': 3, 
    'abr': 4, 
    'mai': 5, 
    'jun': 6, 
    'jul': 7, 
    'ago': 8, 
    'set': 9, 
    'out': 10, 
    'nov': 11, 
    'dez': 12
  }

  const formattedDate = {
    month: monthArray[dateConverter[0].toLowerCase()],
    year: dateConverter[1],
  }
  return formattedDate
}