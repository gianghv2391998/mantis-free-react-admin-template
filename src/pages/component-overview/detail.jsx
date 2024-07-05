import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import TextField from '@mui/material/TextField';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import PopupAction from './popupAction';
import styled from 'styled-components';

function Detail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(location.state?.product || null);
  const [editingProduct, setEditingProduct] = useState(location.state?.product || {});
  const [loading, setLoading] = useState(!location.state?.product);
  const [showPopup, setShowPopup] = useState(false);
  const [titleAction, setTitleAction] = useState('Edit');
  const [refetch, setRefetch] = useState(false);

  const fetchProduct = useCallback(async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/products/${id}`);
      setProduct(response.data);
      setEditingProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  console.log(product);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleEdit = () => {
    setShowPopup(true);
    // Truyền dữ liệu sản phẩm vào popup edit
    setEditingProduct(product);
    setTitleAction('Edit');
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:5000/products/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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
    padding: 20px;
    border-radius: 5px;
    width: 40%;
    height: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  `;

  if (loading) {
    return <div>Product does not exist...</div>;
  }

  return (
    <div className="detail-container" style={{ width: '99%', margin: '10px' }}>
      <Header name={product.name} onEdit={handleEdit} onDelete={handleDelete} onBack={() => navigate(-1)} />
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <TextField
            id="outlined-name"
            label="Name"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            value={editingProduct?.name || ''}
            style={{ width: '50%' }}
            disabled
          />
          <br />
          <br />
          <TextField
            id="outlined-due-date"
            label="Date Created"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            value={editingProduct?.due_date ? format(new Date(editingProduct.due_date), 'yyyy-MM-dd') : ''}
            style={{ width: '50%' }}
            disabled
          />
          <br />
          <br />
          <TextField
            id="outlined-price"
            label="Price"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            value={editingProduct?.price || ''}
            style={{ width: '50%' }}
            disabled
          />
          <br />
          <br />
          <TextField
            id="outlined-image-url"
            label="Image URL"
            type="text"
            InputLabelProps={{
              shrink: true
            }}
            value={editingProduct?.image || ''}
            style={{ width: '50%' }}
            disabled
          />
          <br />
          <br />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={`http://localhost:3000/free/${editingProduct.image}`}
            alt="Preview"
            style={{ width: '100%', maxWidth: '400px', maxHeight: '400px' }}
          />
        </div>
      </div>
      {showPopup && (
        <StyledPopup>
          <PopupContent>
            <PopupAction
              titleAction={titleAction}
              showPopup={showPopup}
              handleClosePopup={handleClosePopup}
              product={editingProduct}
              setProducts={(updatedProduct) => setProduct(updatedProduct)} // Update the product state after saving
              setRefetch={setRefetch}
              refetch={refetch}
              fetchProduct={fetchProduct}
            />
          </PopupContent>
        </StyledPopup>
      )}
    </div>
  );
}

export default Detail;
