import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format, isValid } from 'date-fns';
import PopupAction from './popupAction';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableCell = styled(TableCell)`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const StyledTableRow = styled(TableRow)`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

const Wrapper = styled.div`
  width: 99%;
  margin: 5px;
`;

const AddButtonContainer = styled.div`
  margin-left: 95%;
`;

const StyledPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 40%;
  height: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledIcon = styled.i`
  font-size: ${(props) => (props.edit ? '19px' : '16px')};
`;

function Products() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [titleAction, setTitleAction] = useState('');
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts();
  }, [refetch]);

  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://127.0.0.1:5000/products');
      setProducts(response.data);
    } catch (error) {
      setError('Failed to fetch products');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/products/${id}`);
      setRefetch((prev) => !prev);
    } catch (error) {
      setError('Failed to delete product');
      console.error(error);
    }
  };

  const handleEditProduct = (product) => {
    setProduct(product);
    setShowPopup(true);
    setTitleAction('Edit');
  };

  const handleAddProduct = () => {
    setProduct(null);
    setShowPopup(true);
    setTitleAction('Add');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const safeFormatDate = (date, dateFormat) => {
    const parsedDate = new Date(date);
    return isValid(parsedDate) ? format(parsedDate, dateFormat) : 'Invalid date';
  };

  return (
    <Wrapper>
      <AddButtonContainer>
        <Button variant="contained" onClick={handleAddProduct}>
          Add
        </Button>
      </AddButtonContainer>
      <br />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <TableContainer>
        <StyledTable aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Date Created</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell component="th" scope="row">
                  <Link to={`/detail/${product.id}`}>{product.id}</Link>
                </StyledTableCell>
                <StyledTableCell align="right">{product.name}</StyledTableCell>
                <StyledTableCell align="right">{safeFormatDate(product.due_date, 'dd-MM-yyyy')}</StyledTableCell>
                <StyledTableCell align="right">{product.price}</StyledTableCell>
                <StyledTableCell align="right">
                  <img src={product.image} alt={product.image} width="100" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button style={{ marginRight: '10px' }} variant="outlined" onClick={() => handleEditProduct(product)}>
                    <StyledIcon className="material-icons">edit</StyledIcon>
                  </Button>
                  <Button style={{ marginRight: '10px' }} variant="outlined" onClick={() => handleDeleteProduct(product.id)}>
                    <StyledIcon className="material-icons">delete</StyledIcon>
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
      {showPopup && (
        <StyledPopup>
          <PopupContent>
            <PopupAction
              showPopup={showPopup}
              product={product}
              setProducts={setProducts}
              titleAction={titleAction}
              handleClosePopup={handleClosePopup}
              setRefetch={setRefetch}
              getProducts={getProducts}
            />
          </PopupContent>
        </StyledPopup>
      )}
    </Wrapper>
  );
}

export default Products;
