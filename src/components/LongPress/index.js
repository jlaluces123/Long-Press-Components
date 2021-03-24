import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Components
import {
    MenuProvider,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';

const { SlideInMenu } = renderers;

class LongPress extends Component {
    state = {
        menuOpen: false,
    };

    onLongPress = () => {
        console.log('long press...');
        this.menu.open();
    };

    onRegularPress = () => {
        console.log('normal press...');
    };

    handleSelect = (option) => {
        console.log('You Pressed: ', option);
    };

    handleClose = () => {
        this.menu.close();
    };

    render() {
        return (
            <MenuProvider styles={styles.container}>
                <TouchableOpacity
                    onPress={this.onRegularPress}
                    onLongPress={this.onLongPress}
                >
                    <View style={styles.rectangle}>
                        <Text>Hello World</Text>
                        <Menu
                            ref={(c) => (this.menu = c)}
                            name='rectangle'
                            renderer={SlideInMenu}
                            rendererProps={{ placement: 'bottom' }}
                            onSelect={(option) => this.handleSelect(option)}
                        >
                            <MenuTrigger text='⋮' />

                            <MenuOptions
                                optionsContainerStyle={{
                                    backgroundColor: 'blue',
                                }}
                            >
                                <MenuOption
                                    value={1}
                                    text='Custom Option 1'
                                ></MenuOption>
                                <MenuOption
                                    value={2}
                                    text='Custom Option 2'
                                ></MenuOption>
                                <MenuOption
                                    value={3}
                                    text='Close Menu'
                                    onSelect={this.handleClose}
                                ></MenuOption>
                            </MenuOptions>
                        </Menu>
                    </View>
                </TouchableOpacity>
            </MenuProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100vh',
    },
    rectangle: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#343434',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
    },
    menu: {
        backgroundColor: 'blue',
    },
});

const optionStyles = {
    optionsContainer: {
        padding: 5,
    },
};

export default LongPress;
