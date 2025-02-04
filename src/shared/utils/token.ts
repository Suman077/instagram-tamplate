"use client"
import { jwtDecode } from 'jwt-decode'

export function saveToken(token:string) {
  localStorage.setItem('access_token', token)
}
export function getToken() {
  try {
    return jwtDecode(localStorage.getItem("access_token") || "")
  } catch (error) {
    console.log(error)
  }
}
export function destroyToken() {
  localStorage.removeItem('access_token')
}