
export const getUsers = () => {
    return fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
     .then(res => res.json())
    //  .then(console.log)
     .catch(err => {
      console.log(err)
     })
        
    }
