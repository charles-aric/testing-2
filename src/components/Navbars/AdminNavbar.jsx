import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
  Input,
} from "reactstrap";

function AdminNavbar(props) {
  const handleChange = (event) => {
    localStorage.setItem("enatega-language", event.target.value);
    const newLanguage = event.target.value;
    props.i18n.changeLanguage(newLanguage);
  };

  const { t } = props;

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {t(props.brandText)}
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">{t('Admin')}</span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">{t("Welcome")}!</h6>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("user-enatega");
                    props.history.push("/auth/login");
                  }}
                >
                  <i className="ni ni-user-run" />
                  <span>{t("Logout")}</span>
                </DropdownItem>
                <div className="px-3 py-2">
                  <Input
                    type="select"
                    name="select"
                    defaultValue={localStorage.getItem("enatega-language")}
                    id="exampleSelect"
                    onChange={handleChange}
                    onBlur={(event) => {}}
                  >
                    <option value="en">English</option>
                    <option value="de">Deutsche</option>
                    <option value="zh">中文</option>
                    <option value="km">ភាសាខ្មែរ</option>
                    <option value="fr">français</option>
                    <option value="ar">العربية</option>
                  </Input>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default withTranslation()(AdminNavbar);
