import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from "../../constants";
import { HorizontalFoodCard } from "../../components";
const Home = () => {

    const [selectCategoryId, setSelectCategoryId] = useState(1);
    const [selectedMenuType, setSelectedMenuType] = useState(1);
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        handleChangeCategory(selectCategoryId, selectedMenuType)

    }, []);

    function handleChangeCategory(categoryId, menuTypeId) {
        // Find menu based on id
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);

        // Set menu based on categoryId
        setMenuList(selectedMenu.list.filter(a => a.categories.includes(categoryId)));
    }

    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.radius,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}
                />
                {/* Input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="search food..."
                />
                {/* Filter Button */}
                <TouchableOpacity
                // onPress
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Search */}
            {renderSearch()}
            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalFoodCard")}
                        />
                    )
                }}
            />
            <Text>Home</Text>
        </View>
    )
}

export default Home;