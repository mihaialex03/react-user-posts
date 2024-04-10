import Dropdown from 'react-bootstrap/Dropdown';
export function ChangeLocationDropdown(){
    // folosesc componenta de dropdown din bootstrap
    return(
        <Dropdown>
            <Dropdown.Toggle variant='success' id='dropdown-basic'>
                Alege orasul
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Bucuresti</Dropdown.Item>
                <Dropdown.Item>Cluj</Dropdown.Item>
                <Dropdown.Item>Brasov</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}