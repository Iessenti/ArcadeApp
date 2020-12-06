import AsyncStorage from '@react-native-community/async-storage';

export default order = async (dataArray, state) => {
	const addr = JSON.parse(await AsyncStorage.getItem('addressList'))
	const object = {address: {phone: addr[0].phone, address: addr[0].address}, order: dataArray, state: state}
	let response = await fetch('http://80.249.151.43/addOrder', {method:"POST", headers: {'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(object)} )
    const data = await response.json()
    let orders = JSON.parse( await AsyncStorage.getItem('orderArray'))
    orders.push({id: data.id, items: dataArray})
    await AsyncStorage.setItem('orderArray', JSON.stringify(orders))
}