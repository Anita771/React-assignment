import Pagination from "react-bootstrap/Pagination";



export default function Paginationdata (){
    return (
        <Pagination className="pagination">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{23}</Pagination.Item>
      <Pagination.Item>{24}</Pagination.Item>
      <Pagination.Item active>{25}</Pagination.Item>
      <Pagination.Item>{26}</Pagination.Item>
      <Pagination.Item disabled>{27}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{50}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

    );
}