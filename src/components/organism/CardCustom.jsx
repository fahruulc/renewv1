import PropTypes from "prop-types";
import { Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const CardCustom = ({ children }) => {
  const theme = useTheme();
  return (
    <div>
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[3],
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

CardCustom.propTypes = {
  children: PropTypes.node.isRequired,
};
