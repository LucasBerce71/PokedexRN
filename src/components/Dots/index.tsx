import React, { useState } from "react";
import { FlatList, Animated, ViewProps } from 'react-native';

import { Container, Dot } from './styles';

export const Dots: React.FC = ({ ...props }) => {
    const [dots, setDots] = useState(Array.from(Array(15).keys()));

    return (
        <Container {...props}>
            <FlatList
                data={dots}
                keyExtractor={key => String(key)}
                numColumns={5}
                renderItem={({ item: dot }) => ( <Dot key={dot} /> )}
            />
        </Container>
    );
}