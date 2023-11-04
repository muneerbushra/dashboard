import { iconsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Dashboard', image: iconsImgs.home },
    { id: 2, title: 'Expenses', image: iconsImgs.report },
    { id: 3, title: 'Wallet', image: iconsImgs.budget },
    { id: 4, title: 'Summary', image: iconsImgs.wallet },
    { id: 5, title: 'Account', image: iconsImgs.user },
    { id: 6, title: 'Settings', image: iconsImgs.gears }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 28,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 35,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 56,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 86,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Grocery",
        type: "5:12 pm Belanja De Pasar",
        amount: -326.800
    },
    {
        id: 20, 
        title: "Housing",
        type: "5:12  Bayor Listrik",
        amount: -185.340
    },
    {
        id: 21, 
        title: "Transportation",
        type: "5:12 pm  Naik Bus Umum",
        amount: -15.090
    },
    {
        id: 22, 
        title: "Food and Drinks",
        type: "5:12 pm  Naik bus umum" ,
        amount: -156.099
    },
    {
        id: 23, 
        title: "Entertainment",
        type: "5:12 pm Bayor De saraf",
        amount: -35.766
    }
   
];

export const subscriptions = [
    {
        id: 24,
        title: "Transportation",
        type: "3:15 pm  Naik Bus Umum",
        amount: -25.090
    },
    {
        id: 25,
        title: "Grocery",
        type: "3:19 pm Belanja De Pasar",
        amount: -298.370
    },
    {
        id: 26,
        title: "Entertainment",
        type: "3:19 pm Bayor De saraf",
        amount: -13.326
    }
];
