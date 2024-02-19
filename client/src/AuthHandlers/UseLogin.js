
async function UseLogin(email, password, seterror) {


    try {
      const data = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });
  
      const json = await data.json();
  
      if (!json.success) {
        seterror(json.error);
        console.log(json.success)
      }
  
      if (json.success) {
        seterror(null);
  
        await localStorage.setItem('auth_token', JSON.stringify(json?.token));
  
      return true;
      
      }
  
      console.log(json);
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error as needed
      seterror('An error occurred during signup.');
    }
  }
  
  export default UseLogin;