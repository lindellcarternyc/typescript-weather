import axios from 'axios'
import { GoogleApiKey } from './config'

const detectGelocation = (): boolean => {
  if ( 'geolocation' in navigator ) {
    return true
  } else {
    return false
  }
}

export const getCurrentPosition = (): Promise<Position> => {
  if ( detectGelocation() ) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(position)
        },
        err => {
          reject(err)
        }
      )
    })
  } else {
    const message = 'No Gelocation. Cannot get current position'
    throw new Error(message)
  }
}

interface IResponseData {
  status: string
  results: Array<{
    address_components: Array<{
      long_name: string
      types: string[]
    }>
  }>
}

export const getCityFromLatitudeLongitude = (latitude: number, longitude: number, mock: boolean = true): Promise<string> => {
  if ( mock === true ) {
    // tslint:disable-next-line:no-console
    console.log('mock get city')
    Promise.resolve('Bronx')
  }
  const api = 'https://maps.googleapis.com/maps/api/geocode/json'
  const query = `?json&latlng=${latitude},${longitude}&result_type=locality|sublocality`
  const key = `&key=${GoogleApiKey}`

  const url = api + query + key
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        const data = response.data as IResponseData
        const { status, results } = data

        if  ( status === 'OK' ) {
          const city = results[0].address_components[0].long_name
          resolve(city)
        } else {
          reject(status)
        }
      }).catch(err => {
        reject(err)
      })
  })
}