import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5"
    },

    serachView: {
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: "row",

    },
    txtInput: { height: 38, backgroundColor: '#F2EFEF', color: "black", paddingHorizontal: 10,flex:0.9 },
    sortView:{
        flex:0.2,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    imgSort:{height:25,width:25},
    txtSort:{color:"black",fontSize:10,fontWeight:"bold"},
    //renderview
    renderView: { flexDirection: "row", flex: 1, marginBottom: 20 },
    productImg: { height: 80, width: 80, borderRadius: 40 },
    txtView: { alignSelf: "center", marginLeft: 14, flex: 0.9 },
    txtTitle: { color: "black", fontSize: 20, fontWeight: "700" },
    txtDesc: { color: "#05050580", fontSize: 20, fontWeight: "400" },
    txtNodata: { color: "black", fontSize: 20, alignSelf: "center", fontWeight: "bold" },

    



})
export default styles;