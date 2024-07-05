import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// eslint-disable-next-line react/prop-types
function Tableee({ onIpAddressChange }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    const ip = event.target.value;
    setInputValue(ip);
    onIpAddressChange(ip); // Gọi callback function từ component cha
  };

  return (
    <div style={{ backgroundColor: 'white', margin: '10px 10px' }}>
      <Table sx={{ border: 'solid rgba(224, 224, 224, 1)' }}>
        <TableHead style={{ backgroundColor: 'rgb(161, 194, 241)', fontWeight: 'bold' }}>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>Rule_Type</TableCell>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>Describle</TableCell>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>Source_IP</TableCell>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>Destination</TableCell>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>Domain</TableCell>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>Service</TableCell>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>Thời gian mở</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={8} style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }}>
              Firewall
            </TableCell>
            <TableCell rowSpan={2} style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
              In-Bound
            </TableCell>
            <TableCell rowSpan={2} style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
              103.160.79.71 (IP đầu core service của FCI)
            </TableCell>
            <TableCell rowSpan={2} style={{ backgroundColor: 'white', color: 'red', border: '1px solid rgba(224, 224, 224, 1)' }}>
              <input type="text" value={inputValue} onChange={handleChange} placeholder="Nhập vào đây" />
            </TableCell>
            <TableCell rowSpan={2} style={{ border: '1px solid rgba(224, 224, 224, 1)' }}></TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>6690/TCP</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>Chỉ trong thời gian khởi tạo dịch vụ</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>6690/UDP</TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>Vĩnh viễn</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={6} style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
              Out-Bound
            </TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>db_subnet(của khách hàng tự quy hoạch)</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>103.160.90.39</TableCell>
            <TableCell style={{ backgroundColor: 'white', color: 'rgb(166, 194, 234)', border: '1px solid rgba(224, 224, 224, 1)' }}>
              <a href="console-api.fptcloud.com">console-api.fptcloud.com</a>
            </TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>443/tcp</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>Vĩnh viễn</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
              db_subnet(của khách hàng tự quy hoạch)
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>103.160.90.59</TableCell>
            <TableCell style={{ backgroundColor: 'white', color: 'rgb(166, 194, 234)', border: '1px solid rgba(224, 224, 224, 1)' }}>
              <a href="registry.fke.fptcloud.com">registry.fke.fptcloud.com</a>
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>443/tcp</TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>Vĩnh viễn</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>db_subnet(của khách hàng tự quy hoạch)</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>103.174.212.43</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>- Dịch vụ monitor</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>443/tcp</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>Vĩnh viễn</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
              db_subnet(của khách hàng tự quy hoạch)
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>103.52.112.126</TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>- Dịch vụ monitor</TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>443/tcp</TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>Vĩnh viễn</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>db_subnet(của khách hàng tự quy hoạch)</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>103.174.212.94</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>- Dịch vụ monitor</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>443/tcp</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>Vĩnh viễn</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
              db_subnet(của khách hàng tự quy hoạch)
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
              <a href="0.asia.pool.ntp.org">0.asia.pool.ntp.org</a>
              <br></br>
              <a href="1.asia.pool.ntp.org">1.asia.pool.ntp.org</a>
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>- Time server</TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>123/udp (NTP)</TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>Vĩnh viễn</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', border: '1px solid rgba(224, 224, 224, 1)' }} rowSpan={2}>
              DNAT
            </TableCell>
            <TableCell rowSpan={2} style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>
              FDE-Backend rule
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', color: 'red', border: '1px solid rgba(224, 224, 224, 1)' }}>
              <input type="text" value={inputValue} onChange={handleChange} placeholder="Nhập vào đây" />
            </TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>100.69.0.36 (fde-backend)</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}></TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>From 6690/TCP--{'>'}To 22/TCP</TableCell>
            <TableCell style={{ border: '1px solid rgba(224, 224, 224, 1)' }}>Chỉ trong thời gian khởi tạo dịch vụ</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ backgroundColor: 'white', color: 'red', border: '1px solid rgba(224, 224, 224, 1)' }}>
              <input type="text" value={inputValue} onChange={handleChange} placeholder="Nhập vào đây" />
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
              100.69.0.36 (fde-backend)
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}></TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}>
              From 6690/TCP--{'>'}To 6690/UDP
            </TableCell>
            <TableCell style={{ backgroundColor: 'white', border: '1px solid rgba(224, 224, 224, 1)' }}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Tableee;
