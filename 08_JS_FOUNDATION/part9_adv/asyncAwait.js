function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({
        name: "pranay",
        url: "https://pranay.com",
      });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Feteching user data...");
    const userData = await fetchUserData();4
    console.log("User Data fetched successfully");
    
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data ", error);
  }
}

getUserData();
