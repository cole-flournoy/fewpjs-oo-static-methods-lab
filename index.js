class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    let newArray = []
    let array = string.split(' ')

    for (let a of array){
      let exclude = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
      debugger
      if (exclude.includes(a.toLowerCase())){
        newArray.push(a)
      } else {
        newArray.push(this.capitalize(a))
      }
    }
    newArray[0] = this.capitalize(newArray[0])
    return newArray.join(" ")
  }
}