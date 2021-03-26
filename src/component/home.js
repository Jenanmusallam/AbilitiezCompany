import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: "#267296",
  },
  textStyle: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 60,
    height: 100,
    width: "20%",
    margin: "auto",
    marginTop: 50,
    marginBottom: 50,
  },
  product: {
    margin: 20,
    padding: 29,
    color: "#267296",
    fontWeight: "bold",
  },
  root: {
    maxWidth: 345,
  },
  topCard: {
    height: 90,
  },
  media: {
    height: 0,
    paddingTop: "50.25%", // 16:9
  },

  stock: {
    color: "#0d77a8",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("data/products.json").then((res) => {
      console.log(res);
      setProduct(res.data);
    });
  });
  return (
    <>
      <div className={classes.body}>
        <Container>
          <div className={classes.textStyle}>
            <h1 className={classes.product}>Products</h1>
          </div>
          <Grid container spacing={3}>
            {product.map((product) => (
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardHeader
                    title={product.name}
                    subheader={product.description}
                    className={classes.topCard}
                  />
                  <CardMedia
                    className={classes.media}
                    image="http://abilitiez.net/images/Az-Default-pic.jpg"
                    title="product"
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Price: {product.price} JD
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      className={classes.stock}
                      gutterBottom
                    >
                      Stock Amount: {product.stock_amount} Q
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}
// by:Jenan Musallam
