import { Avatar, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import { deepPurple } from '@mui/material/colors';
import { theme } from '../theme'

const Dialogue = () => {

    return (
        <Grid container direction="column">
            <Grid item sm={12} display="flex" justifyContent="flex-end">
                <IconButton size="small"><StarIcon fontSize="10px" /></IconButton>
                <IconButton size="small"><DeleteIcon fontSize="10px" /></IconButton>
            </Grid>
            <Grid item sm={12}>
                <Box sx={{ height: "400px", backgroundColor: deepPurple[50], borderRadius: "5px", padding: "2rem" }}>
                    <Box sx={{ display: "flex", alignItems: "baseline" }}>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Typography
                                color="secondary"
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: "#fff",
                                    padding: ".5rem .8rem",
                                    borderRadius: "20px",
                                    borderTopLeftRadius: "0px",
                                    marginLeft: "10px"
                                }}
                                component="span">
                                asdasdasdasd
                            </Typography>
                            <Typography sx={{ marginLeft: "20px" }} variant="caption" color="InactiveCaptionText">08:20</Typography>
                        </Box>

                    </Box>
                    <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "flex-end" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Typography
                                sx={{
                                    backgroundColor: theme.palette.primary.light,
                                    color: "#fff",
                                    padding: ".5rem .8rem",
                                    borderRadius: "20px",
                                    borderBottomRightRadius: "0px",
                                    marginRight: "10px"
                                }}
                                component="span">
                                asdasdasdasd
                            </Typography>
                            <Typography sx={{ marginLeft: "20px" }} variant="caption" color="InactiveCaptionText">08:20</Typography>
                        </Box>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>

                    </Box>
                    <Box sx={{ display: "flex", alignItems: "baseline" }}>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Typography
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: "#fff",
                                    padding: ".5rem .8rem",
                                    borderRadius: "20px",
                                    borderTopLeftRadius: "0px",
                                    marginLeft: "10px"
                                }}
                                component="span">
                                asdasdasdasd
                            </Typography>
                            <Typography sx={{ marginLeft: "20px" }} variant="caption" color="InactiveCaptionText">08:20</Typography>
                        </Box>

                    </Box>
                </Box>
            </Grid>
            <Grid item sm={12}>
                <FormControl sx={{ width: "100%", marginTop: "8px" }} variant="outlined">
                    <InputLabel>Send message</InputLabel>
                    <OutlinedInput
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton >
                                    <SendIcon sx={{ color: theme.palette.primary.light }} />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Send message"
                    />
                </FormControl>
            </Grid>
        </Grid>



    )
}

export default Dialogue
