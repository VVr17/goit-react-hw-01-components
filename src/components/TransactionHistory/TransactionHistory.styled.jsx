import styled from '@emotion/styled';

export const TransactionTable = styled.table`
	width: 90%;
  margin: 0 auto 20px auto;
	border: 5px solid #fff;
	border-top: 5px solid #fff;
	border-bottom: 3px solid #fff;
	border-collapse: collapse; 
	outline: 3px solid #ffd300;
	font-size: 30px;
	background: #fff!important;

 th {
	font-weight: bold;
	padding: 7px;
	background: #ffd300;
	border: none;
	text-align: left;
	font-size: 24px;
	border-top: 3px solid #fff;
	border-bottom: 3px solid #ffd300;
}
 td {
	padding: 7px;
	border: none;
	border-top: 3px solid #fff;
	border-bottom: 3px solid #fff;
	font-size: 24px;
}
 tbody tr:nth-of-type(even){
	background: #f8f8f8!important;
}
`;
