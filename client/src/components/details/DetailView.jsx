
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductsDetails } from "../../redux/actions/productAction";

import { Box, Grid, styled } from "@mui/material";

import ActionItem from "./ActionItems";
import ProductDetail from "./ProductDetails";

const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
    display: flex;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]:{
        margin: 0
    }
}));

const RightContainer = styled(Box)`
    margin-top: 50px;
    padding-left: 25px;
    & > p {
        margin-top: 10px;
    }
`;


const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if(product && id !== product.id)
            dispatch(getProductsDetails(id))
    }, [dispatch, id, product, loading])

    console.log(product);

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                    <Container container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product={product} />
                        </Grid>
                        <RightContainer item lg={4} md={8} sm={8} xs={12}>
                            <ProductDetail product={product} />
                        </RightContainer>
                    </Container>
            }
        </Component>
    )
}

export default DetailView;