import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Search extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Search Screen!</Text>
      <Ionicons name="md-settings-outline" size={80} color="#006600" />
    </View>
            </div>
        );
    }
}

Search.propTypes = {

};

export default Search;