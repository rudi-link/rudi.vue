export function token() {
  return {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  };
}

export function getLocation() : { latitude: number; longitude: number } | null {
  let location: { latitude: number; longitude: number } | null = null

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        location = coords;
      },
      (err) => console.error(err)
    )
  }

  return location || { latitude: 1, longitude: 1 }
}
