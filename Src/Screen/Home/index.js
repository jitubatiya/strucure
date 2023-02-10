import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { images } from "../../Resource/Images";
import { strings } from "../../Resource/Strings";
import styles from "./Styles";

const Home = (props) => {
    const [productList, setProductList] = useState([])
    const [copyData, setCopyData] = useState([])
    const [isAsce, setAsce] = useState(0)
    useEffect(() => {
        getProudctData();
    }, [])
    const getProudctData = () => {
        axios.get('https://dummyjson.com/products/')
            .then(function (response) {
                if (response.status == 200)
                    setProductList(response?.data?.products)
                setCopyData(response?.data?.products)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const onChangeText = (text) => {
        if (text?.trim().length != 0)
            setCopyData(copyData.filter((item) => filterData(item, text)))
        else
            setCopyData(productList)
    }
    function filterData(data, text) {
        return data.title.toUpperCase().includes(text.toUpperCase())
    }
    function clickOnSort() {
        let arr=[...copyData]

        if (isAsce == 0) {
            setCopyData(arr?.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0)))
            setAsce(1)
        }
        else if (isAsce == 1) {
            setCopyData(arr?.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() < a.title.toLowerCase()) ? -1 : 0)))
            setAsce(2)
        }
        else {
            setAsce(0)
            setCopyData(productList)
        }


    }
    const serachView = () => {
        return (
            <View style={styles.serachView}>
                <TextInput
                    style={styles.txtInput}
                    placeholder={strings.txtSerach}
                    placeholderTextColor={"#968888"}
                    onChangeText={(value) => onChangeText(value)}
                >
                </TextInput>
                <TouchableOpacity style={[styles.sortView,
                isAsce == 1 ? { borderWidth: 1, borderColor: "blue",borderRadius:5 } :
                    isAsce == 2 ? { borderWidth: 1, borderColor: "yellow" ,borderRadius:5} : {}]}
                    onPress={clickOnSort}
                >
                    <Image source={images.sort} style={styles.imgSort} resizeMode={"contain"} />
                    {isAsce != 0 && <Text style={styles.txtSort}>{isAsce == 1 ? "ASCE" : "DESC"}</Text>}
                </TouchableOpacity>
            </View>
        )
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.renderView}>
                <Image source={{ uri: item.thumbnail }} style={styles.productImg} resizeMode={"contain"} />
                <View style={styles.txtView}>
                    <Text style={styles.txtTitle}>{item.title}</Text>
                    <Text style={styles.txtDesc}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const renderEmpty = () => {
        return <Text style={styles.txtNodata}>No Data Found</Text>
    }
    return (
        <View style={styles.container}>
            {serachView()}
           {useMemo(()=> <FlatList
                data={copyData}
                renderItem={renderItem}
                style={{ flex: 1, marginHorizontal: 20, marginVertical: 10 }}
                ListEmptyComponent={renderEmpty}
            />,[copyData])}
        </View>
    )
}
export default Home;