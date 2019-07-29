export default function combineServerData(allStore, data) {
    const keyArr = Object.keys(allStore);
    console.info(data, 'datadata')
    console.info(allStore, 'allStoreallStoreallStoreallStore')
    keyArr.map((key) => {
        if (allStore[key] && allStore[key].state) {
            allStore[key].state = data[key].state
        }
    });
}
