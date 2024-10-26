import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <NavListMenu
        title="HOME"
        oT="HOME ONE"
        oL="/"
        twT="HOME TWO"
        twL="homeTwo"
      />

      <CompanyMenu
        title="COMPANY"
        oT="ABOUT US"
        oL="about"
        twT="OUR PEOPLE"
        twL="people"
        thT="TESTIMONIALS"
        thL="testimonials"
        foT="FAQ"
        foL="faq"
        fiT="PRICING"
        fiL="pricing"
      />

      <NavListMenu
        title="PROJECTS"
        oT="PROJECTS ALL"
        oL="projects"
        twT="PROJECT SINGLE"
        twL="projectSingle"
      />

      <NavListMenu
        title="SERVICES"
        oT="SERVICES ALL"
        oL="services"
        twT="SERVICE SINGLE"
        twL="serviceSingle"
      />

      <NewsMenu
        title="FEATURES"
        oT="TYPOGRAPHY"
        oL="typography"
        twT="404"
        twL="*"
        thT="PARENT MENU"
      />

      <NewsMenu
        title="NEWS"
        oT="NEWS LEFT SIDEBAR"
        oL="newsLeftBar"
        twT="NEWS RIGHT SIDEBAR"
        twL="newsRightBar"
        thT="NEWS SINGLE"
        thL="newsSingle"
      />

      <Typography as="a" href="contact" variant="h4" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white hover:text-yellowDark focus:text-yellowDark visited:text-yellowDark  bg-grayDark hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent">
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

function NavbarMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 rounded-none bg-grayDark border-none">
      <div className="flex items-center h-[70px] justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="lg:hidden bg-yellowDark hover:text-white hover:bg-yellowDark rounded-none p-8 text-white active:bg-yellowDark active:text-white"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-12 w-12" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-12 w-12" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

// Home,Project,Service
function NavListMenu({ title, oT, twT, oL, twL }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h4" className="font-medium">
            <ListItem
              className="flex items-center md:justify-between gap-2 py-2 pr-4 font-medium  bg-grayDark hover:bg-grayDark active:bg-darkGray focus:bg-grayDark visited:bg-grayDark text-white hover:text-yellowDark active:text-yellowDark focus:text-yellowDark visited:text-yellowDark"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-5 w-5 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-8 w-8 transition-transform lg:hidden bg-black text-yellowDark p-2  ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden lg:block rounded-none border-t-2 border-t-yellowDark mt-[18px] ml-[47px]">
          <Typography
            as="a"
            href={oL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {oT}
            </MenuItem>
          </Typography>
          <Typography
            as="a"
            href={twL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 ">
              {twT}
            </MenuItem>
          </Typography>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen} className="bg-white">
          <Typography
            as="a"
            href={oL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {oT}
            </MenuItem>
          </Typography>
          <Typography
            as="a"
            href={twL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 ">
              {twT}
            </MenuItem>
          </Typography>
        </Collapse>
      </div>
    </>
  );
}
// Company List
function CompanyMenu({
  title,
  oT,
  twT,
  thT,
  foT,
  fiT,
  oL,
  twL,
  thL,
  foL,
  fiL,
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h4" className="font-medium">
            <ListItem
              className="flex items-center md:justify-between gap-2 py-2 pr-4 font-medium  bg-grayDark hover:bg-grayDark active:bg-darkGray focus:bg-grayDark visited:bg-grayDark text-white hover:text-yellowDark active:text-yellowDark focus:text-yellowDark visited:text-yellowDark"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-5 w-5 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-8 w-8 transition-transform lg:hidden bg-black text-yellowDark p-2  ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden lg:block rounded-none border-t-2 border-t-yellowDark mt-[18px] ml-[47px]">
          <Typography
            as="a"
            href={oL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {oT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={twL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {twT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={thL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {thT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={foL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {foT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={fiL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 ">
              {fiT}
            </MenuItem>
          </Typography>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen} className="bg-white">
          <Typography
            as="a"
            href={oL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {oT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={twL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {twT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={thL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {thT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={foL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {foT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={fiL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 ">
              {fiT}
            </MenuItem>
          </Typography>
        </Collapse>
      </div>
    </>
  );
}

function NewsMenu({ title, oT, twT, thT, oL, twL, thL }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h4" className="font-medium">
            <ListItem
              className="flex items-center md:justify-between gap-2 py-2 pr-4 font-medium  bg-grayDark hover:bg-grayDark active:bg-darkGray focus:bg-grayDark visited:bg-grayDark text-white hover:text-yellowDark active:text-yellowDark focus:text-yellowDark visited:text-yellowDark"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {title}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-5 w-5 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-8 w-8 transition-transform lg:hidden bg-black text-yellowDark p-2  ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden lg:block rounded-none border-t-2 border-t-yellowDark mt-[18px] ml-[47px]">
          <Typography
            as="a"
            href={oL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {oT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={twL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {twT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={thL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 ">
              {thT}
            </MenuItem>
          </Typography>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen} className="bg-white">
          <Typography
            as="a"
            href={oL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {oT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={twL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 border-b-2 border-b-grayLight">
              {twT}
            </MenuItem>
          </Typography>

          <Typography
            as="a"
            href={thL}
            variant="h5"
            className="font-medium px-5"
          >
            <MenuItem className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent visited:bg-transparent text-black hover:text-yellowDark py-5 ">
              {thT}
            </MenuItem>
          </Typography>
        </Collapse>
      </div>
    </>
  );
}

export default NavbarMenu;
