import { Box, Button, Heading, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";

const MarketInteractionComponent = (props) => {
  const { ...rest } = props;

  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Przykładowe dane transakcyjne - do zastąpienia rzeczywistymi danymi
  const transactionHistory = [
    { id: 1, type: "Buy", amount: 2.5, currency: "BTC", price: "$40,000", date: "2023-02-15" },
    { id: 2, type: "Sell", amount: 1.8, currency: "ETH", price: "$2,500", date: "2023-02-14" },
    // Dodaj więcej transakcji w podobny sposób...
  ];

  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Heading me='auto' color={textColor} fontSize='xl' fontWeight='700' lineHeight='100%'>
        Market Interactions
      </Heading>

      <Box mb='4'>
        <Button colorScheme='blue' mr='4'>
          Buy
        </Button>
        <Button colorScheme='red'>
          Sell
        </Button>
      </Box>

      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
            <Th>Price</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactionHistory.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.id}</Td>
              <Td>{transaction.type}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.currency}</Td>
              <Td>{transaction.price}</Td>
              <Td>{transaction.date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

export default MarketInteractionComponent;
