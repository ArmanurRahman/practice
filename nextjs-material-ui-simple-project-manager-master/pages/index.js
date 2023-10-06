import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import FilterIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    radio: {
        fontWeight: 300,
    },
    user: {
        marginRight: 0,
    },
}));

const createData = (
    name,
    date,
    service,
    features,
    complexity,
    platforms,
    users,
    total
) => ({
    name,
    date,
    service,
    features,
    complexity,
    platforms,
    users,
    total,
});

const ProjectManager = () => {
    const theme = useTheme();
    const classes = useStyles();

    const [row, setRow] = useState([
        createData(
            "Mubeen",
            "2020/11/21",
            "Website",
            "E-Commerce",
            "N/A",
            "N/A",
            "N/A",
            "$1500"
        ),
        createData(
            "Bill Gates",
            "2020/10/11",
            "Custom Software",
            "GPS, Push Notification, File Transfer",
            "Medium",
            "Web Application",
            "0-10",
            "$1600"
        ),
        createData(
            "Steve Jobs",
            "2020/05/05",
            "Custom Software",
            "Photo/Videos, File Transfer, Users/Authintication",
            "Low",
            "Web Application",
            "0-10",
            "$1250"
        ),
    ]);
    const [dialogOpen, setDialogOpen] = useState(false);

    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());

    const [websideChecked, setWebsiteChecked] = useState(false);
    const [iosChecked, setIosChecked] = useState(false);
    const [androidChecked, setAndroidChecked] = useState(false);
    const [softwareChecked, setSoftwareChecked] = useState(false);
    const [total, setTotal] = useState("");
    const [service, setService] = useState();
    const [complexity, setComplexity] = useState();
    const [user, setUser] = useState();
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);

    const platformOptions = ["Android", "IOS", "WEB"];
    const featureOptions = [
        "Photo/Video",
        "GPS",
        "File Transfer",
        "Users/Authentication",
        "Biometrics",
        "Push Notifications",
    ];
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container direction='column'>
                <Grid item style={{ marginLeft: "5em", marginTop: "2em" }}>
                    <Typography variant='h2'>Projects</Typography>
                </Grid>
                <Grid item>
                    <TextField
                        variant='standard'
                        placeholder='Search Project details or create new entry'
                        style={{ width: "35em", marginLeft: "5em" }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position='end'
                                    onClick={() => setDialogOpen(true)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <AddIcon color='primary' />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item>
                    <FormGroup
                        style={{ marginLeft: "5em", marginTop: "2em" }}
                        row
                    >
                        <FormControlLabel
                            style={{ marginRight: "5em" }}
                            control={
                                <Switch
                                    color='primary'
                                    checked={websideChecked}
                                    onChange={() =>
                                        setWebsiteChecked(
                                            (prevstate) => !prevstate
                                        )
                                    }
                                />
                            }
                            label='Websites'
                            labelPlacement='start'
                        />
                        <FormControlLabel
                            style={{ marginRight: "5em" }}
                            control={
                                <Switch
                                    color='primary'
                                    checked={iosChecked}
                                    onChange={() =>
                                        setIosChecked((prevstate) => !prevstate)
                                    }
                                />
                            }
                            label='iOS Apps'
                            labelPlacement='start'
                        />
                        <FormControlLabel
                            style={{ marginRight: "5em" }}
                            control={
                                <Switch
                                    color='primary'
                                    checked={androidChecked}
                                    onChange={() =>
                                        setAndroidChecked(
                                            (prevstate) => !prevstate
                                        )
                                    }
                                />
                            }
                            label='Android Apps'
                            labelPlacement='start'
                        />
                        <FormControlLabel
                            style={{ marginRight: "5em" }}
                            control={
                                <Switch
                                    color='primary'
                                    checked={softwareChecked}
                                    onChange={() =>
                                        setSoftwareChecked(
                                            (prevstate) => !prevstate
                                        )
                                    }
                                />
                            }
                            label='Custom Software'
                            labelPlacement='start'
                        />
                    </FormGroup>
                </Grid>
                <Grid
                    item
                    container
                    justify='flex-end'
                    style={{ marginTop: 25 }}
                >
                    <IconButton>
                        <FilterIcon
                            color='secondary'
                            style={{ fontSize: 40 }}
                        />
                    </IconButton>
                </Grid>
                <Grid item style={{ marginBottom: "30em" }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Date</TableCell>
                                    <TableCell align='center'>
                                        Services
                                    </TableCell>
                                    <TableCell align='center'>
                                        Features
                                    </TableCell>
                                    <TableCell align='center'>
                                        Complesity
                                    </TableCell>
                                    <TableCell align='center'>
                                        Platforms
                                    </TableCell>
                                    <TableCell align='center'>Users</TableCell>
                                    <TableCell align='center'>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell align='center'>
                                            {data.name}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {data.date}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {data.service}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {data.features}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {data.complexity}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {data.platforms}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {data.users}
                                        </TableCell>
                                        <TableCell align='center'>
                                            {data.total}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Dialog
                    fullWidth
                    maxWidth='md'
                    open={dialogOpen}
                    onClose={() => setDialogOpen(false)}
                >
                    <Grid container justify='center'>
                        <Grid item>
                            <Typography variant='h2'>New Project</Typography>
                        </Grid>
                    </Grid>
                    <DialogContent>
                        <Grid container justify='space-between'>
                            <Grid item>
                                <Grid item container direction='column' sm>
                                    <Grid item>
                                        <TextField
                                            fullWidth
                                            label='Product Name'
                                            value={name}
                                            onChange={(event) =>
                                                setName(event.target.value)
                                            }
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        direction='column'
                                        style={{ marginTop: "5em" }}
                                    >
                                        <Grid item>
                                            <Typography variant='h4'>
                                                {" "}
                                                Services
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <RadioGroup
                                                aria-label='service'
                                                name='service'
                                                value={service}
                                                onChange={(event) =>
                                                    setService(
                                                        event.target.value
                                                    )
                                                }
                                            >
                                                <FormControlLabel
                                                    value='Website'
                                                    label='Website'
                                                    control={<Radio />}
                                                    classes={{
                                                        label: classes.radio,
                                                    }}
                                                />
                                                <FormControlLabel
                                                    value='Mpbile App'
                                                    label='Mobile App'
                                                    control={<Radio />}
                                                    classes={{
                                                        label: classes.radio,
                                                    }}
                                                />
                                                <FormControlLabel
                                                    value='Custom Software'
                                                    label='Custom Software'
                                                    control={<Radio />}
                                                    classes={{
                                                        label: classes.radio,
                                                    }}
                                                />
                                            </RadioGroup>
                                        </Grid>
                                        <Grid item style={{ marginTop: "5em" }}>
                                            <Select
                                                labelId='platforms'
                                                id='platforms'
                                                multiple
                                                value={platforms}
                                                onChange={(event) =>
                                                    setPlatforms(
                                                        event.target.value
                                                    )
                                                }
                                                style={{ width: "12em" }}
                                                displayEmpty
                                                renderValue={
                                                    platforms.length > 0
                                                        ? undefined
                                                        : () => "Platforms"
                                                }
                                            >
                                                {platformOptions.map(
                                                    (option) => (
                                                        <MenuItem
                                                            key={option}
                                                            value={option}
                                                        >
                                                            {option}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </Select>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid
                                    item
                                    container
                                    direction='column'
                                    sm
                                    alignItems='center'
                                    style={{ marginTop: 16 }}
                                >
                                    <Grid item>
                                        <KeyboardDatePicker
                                            format='MM/dd/yyyy'
                                            value={date}
                                            onChange={(newDate) =>
                                                setDate(newDate)
                                            }
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Grid
                                            item
                                            container
                                            direction='column'
                                            style={{ marginTop: "5em" }}
                                        >
                                            <Grid item>
                                                <Typography variant='h4'>
                                                    {" "}
                                                    Complexity
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <RadioGroup
                                                    aria-label='complexity'
                                                    name='complexity'
                                                    value={complexity}
                                                    onChange={(event) =>
                                                        setComplexity(
                                                            event.target.value
                                                        )
                                                    }
                                                >
                                                    <FormControlLabel
                                                        value='High'
                                                        label='High'
                                                        control={<Radio />}
                                                        classes={{
                                                            label:
                                                                classes.radio,
                                                        }}
                                                    />
                                                    <FormControlLabel
                                                        value='Medium'
                                                        label='Medium'
                                                        control={<Radio />}
                                                        classes={{
                                                            label:
                                                                classes.radio,
                                                        }}
                                                    />
                                                    <FormControlLabel
                                                        value='Low'
                                                        label='Low'
                                                        control={<Radio />}
                                                        classes={{
                                                            label:
                                                                classes.radio,
                                                        }}
                                                    />
                                                </RadioGroup>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid
                                    item
                                    container
                                    direction='column'
                                    sm
                                    alignItems='flex-end'
                                >
                                    <Grid item>
                                        <TextField
                                            label='Total'
                                            value={total}
                                            onChange={(event) =>
                                                setTotal(event.target.value)
                                            }
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start'>
                                                        $
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Grid
                                            item
                                            container
                                            direction='column'
                                            style={{ marginTop: "5em" }}
                                            alignItems='flex-end'
                                        >
                                            <Grid item>
                                                <Typography variant='h4'>
                                                    {" "}
                                                    User
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <RadioGroup
                                                    aria-label='user'
                                                    name='user'
                                                    value={user}
                                                    onChange={(event) =>
                                                        setUser(
                                                            event.target.value
                                                        )
                                                    }
                                                >
                                                    <FormControlLabel
                                                        value='1-10'
                                                        label='1-10'
                                                        control={<Radio />}
                                                        classes={{
                                                            label:
                                                                classes.radio,
                                                            root: classes.user,
                                                        }}
                                                    />
                                                    <FormControlLabel
                                                        value='10-100'
                                                        label='10-100'
                                                        control={<Radio />}
                                                        classes={{
                                                            label:
                                                                classes.radio,
                                                            root: classes.user,
                                                        }}
                                                    />
                                                    <FormControlLabel
                                                        value='100+'
                                                        label='100+'
                                                        control={<Radio />}
                                                        classes={{
                                                            label:
                                                                classes.radio,
                                                            root: classes.user,
                                                        }}
                                                    />
                                                </RadioGroup>
                                            </Grid>
                                            <Grid
                                                item
                                                style={{ marginTop: "5em" }}
                                            >
                                                <Select
                                                    labelId='features'
                                                    id='features'
                                                    multiple
                                                    value={features}
                                                    onChange={(event) =>
                                                        setFeatures(
                                                            event.target.value
                                                        )
                                                    }
                                                    style={{ width: "12em" }}
                                                    displayEmpty
                                                    renderValue={
                                                        features.length > 0
                                                            ? undefined
                                                            : () => "Featues"
                                                    }
                                                >
                                                    {featureOptions.map(
                                                        (option) => (
                                                            <MenuItem
                                                                key={option}
                                                                value={option}
                                                            >
                                                                {option}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default ProjectManager;
