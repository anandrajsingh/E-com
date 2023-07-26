import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { updateAddress } from "../feature/checkout-slice";
import { useDispatch } from "react-redux";

export default function AddressForm() {
    const address = useSelector((state) => state.checkout?.address);
    const dispatch = useDispatch();
    function handleAddressChange(event){
        const {name, value} = event.target ?? {};
        dispatch(updateAddress({ [name]: value}));
    }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <Box component="form" onChange={handleAddressChange}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField defaultValue={address.firstName ?? ""} required id="firstName" name="firstName" label="First-name" fullWidth autoComplete="given-name" variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField defaultValue={address.lastName ?? ""} required id="lastName" name="lastName" label="Last.name" fullWidth autoComplete="family-name" variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField defaultValue={address.address1 ?? ""} required id="address1" name="address1" label="Address Line 1" fullWidth  variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField defaultValue={address.address2 ?? ""} required id="address2" name="address2" label="Address Line 2" fullWidth variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField defaultValue={address.city ?? ""} required id="city" name="city" label="City" fullWidth variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField defaultValue={address.zipCode ?? ""} required id="zip-code" name="zipCode" label="Zip Code/Postal Code" fullWidth  variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField defaultValue={address.country ?? ""} required id="country" name="country" label="Country" fullWidth variant="standard"/>
            </Grid>
        </Grid>
      </Box>
    </>
  )
}
