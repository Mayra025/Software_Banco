export type Menu = {
    name: string, 
    iconClass: string, 
    active: boolean,
    submenu: { name: string, url: string, id:number }[]
  }