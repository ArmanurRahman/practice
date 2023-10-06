import React, { useReducer } from "react";
import Button from "../UI/Button/Button";
import Checkbox from "../UI/Checkbox/Checkbox";
import DateInput from "../UI/DateInput/Dateinput";
import Input from "../UI/Input/Input";
import MultiInput from "../UI/MuntiInput/MultiInput";
import CategorySelect from "../UI/Select/CategorySelect";
import * as types from "../../types/types";
import Spinner from "../UI/Spinner/Spinner";
import WarningAlert from "../UI/Alert/WarningAlert";
import * as interfaceses from "../../interface/interface";

type Action =
    | { type: "name"; value: string }
    | { type: "category"; value: types.Category }
    | { type: "description"; value: string }
    | { type: "startDate"; value: string }
    | { type: "endDate"; value: string }
    | { type: "from"; value: string }
    | { type: "to"; value: string }
    | { type: "clear" }
    | { type: "day"; day: keyof interfaceses.ActivityForm };

const initState: interfaceses.ActivityForm = {
    name: "",
    category: "",
    description: "",
    startDate: "",
    endDate: "",
    from: "",
    to: "",
    mon: false,
    tues: false,
    wed: false,
    thus: false,
    fri: false,
    sat: false,
    sun: false,
};
const activityReducer = (
    initState: interfaceses.ActivityForm,
    action: Action
): interfaceses.ActivityForm => {
    switch (action.type) {
        case "name":
            return { ...initState, name: action.value };
        case "category":
            return { ...initState, category: action.value };
        case "description":
            return { ...initState, description: action.value };
        case "startDate":
            return { ...initState, startDate: action.value };
        case "endDate":
            return { ...initState, endDate: action.value };
        case "from":
            return { ...initState, from: action.value };
        case "to":
            return { ...initState, to: action.value };
        case "day":
            return {
                ...initState,
                [action.day]: !initState[action.day],
            };
        case "clear":
            return {
                name: "",
                category: "",
                description: "",
                startDate: "",
                endDate: "",
                from: "",
                to: "",
                mon: false,
                tues: false,
                wed: false,
                thus: false,
                fri: false,
                sat: false,
                sun: false,
            };
        default:
            new Error("Invalid action type!");
            return initState;
    }
};

interface SaveInterface {
    loading: boolean;
    success: string;
    error: string;
    warning: string;
}

const saveInitState: SaveInterface = {
    loading: false,
    success: "",
    error: "",
    warning: "",
};

type SaveAction =
    | { type: "loading" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
    | { type: "warning"; message: string }
    | { type: "clear" };

const saveReducer = (saveInitState: SaveInterface, action: SaveAction) => {
    switch (action.type) {
        case "loading":
            return { ...saveInitState, loading: true, success: "", error: "" };
        case "success":
            return {
                ...saveInitState,
                loading: false,
                success: action.message,
                error: "",
                warning: "",
            };
        case "error":
            return {
                ...saveInitState,
                loading: false,
                success: "",
                error: action.message,
                warning: "",
            };
        case "warning":
            return {
                ...saveInitState,
                loading: false,
                success: "",
                error: "",
                warning: action.message,
            };
        case "clear":
            return {
                loading: false,
                success: "",
                error: "",
                warning: "",
            };

        default:
            return saveInitState;
    }
};
interface ActivityInterface {
    onFetch: () => void;
    onClose: () => void;
}
const Activity: React.FC<ActivityInterface> = ({ onFetch, onClose }) => {
    const [state, dispatch] = useReducer(activityReducer, initState);
    const [saveState, saveDispatch] = useReducer(saveReducer, saveInitState);

    const checkValidity = (): boolean => {
        if (
            state.name.trim() === "" ||
            state.category.trim() === "" ||
            state.startDate.trim() === ""
        ) {
            saveDispatch({ type: "warning", message: "Invalid input!" });
            return false;
        }
        return true;
    };

    const saveHandler = () => {
        if (!checkValidity()) {
            return;
        }
        saveDispatch({ type: "loading" });
        fetch(
            "https://activity-tracker-55d23-default-rtdb.firebaseio.com/activity.json",
            {
                method: "POST",
                body: JSON.stringify({ ...state, createdAt: new Date() }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                saveDispatch({ type: "success", message: "" });
                clearControls();
                onFetch();
                onClose();
            })
            .catch((e) => {
                console.log(e);
                saveDispatch({ type: "error", message: "Error occurs!" });
            });
    };

    const clearControls = () => {
        dispatch({ type: "clear" });
    };

    return (
        <div className='flex flex-col gap-8 items-start max-w-lg p-4 flex-1  rounded-md'>
            {saveState.warning && (
                <WarningAlert
                    message={saveState.warning}
                    onClose={() => saveDispatch({ type: "clear" })}
                />
            )}

            <Input
                name='name'
                label='Name*'
                value={state.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "name", value: e.target.value })
                }
            />
            <CategorySelect
                name='category'
                label='Category*'
                value={state.category}
                onChange={(value: types.Category) =>
                    dispatch({ type: "category", value: value })
                }
            />
            <MultiInput
                name='description'
                label='Description'
                value={state.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    dispatch({ type: "description", value: e.target.value })
                }
            />
            <DateInput
                name='startDate'
                label='Start Date*'
                value={state.startDate}
                type='date'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "startDate", value: e.target.value })
                }
            />
            <DateInput
                name='endDate'
                label='End Date'
                value={state.endDate}
                type='date'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "endDate", value: e.target.value })
                }
            />
            <DateInput
                name='from'
                label='From'
                value={state.from}
                type='time'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "from", value: e.target.value })
                }
            />
            <DateInput
                name='to'
                label='To'
                value={state.to}
                type='time'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: "to", value: e.target.value })
                }
            />
            <div className=' border p-2 rounded-md shadow-md  w-full'>
                <p> Repeat</p>
                <div className='flex gap-4 w-full flex-wrap mt-2'>
                    <Checkbox
                        label='Monday'
                        id='mon'
                        checked={state.mon}
                        onChange={() => dispatch({ type: "day", day: "mon" })}
                    />
                    <Checkbox
                        label='Tuesday'
                        id='tues'
                        checked={state.tues}
                        onChange={() => dispatch({ type: "day", day: "tues" })}
                    />
                    <Checkbox
                        label='Wednesday'
                        id='wed'
                        checked={state.wed}
                        onChange={() => dispatch({ type: "day", day: "wed" })}
                    />
                    <Checkbox
                        label='Thusday'
                        id='thus'
                        checked={state.thus}
                        onChange={() => dispatch({ type: "day", day: "thus" })}
                    />
                    <Checkbox
                        label='Friday'
                        id='fri'
                        checked={state.fri}
                        onChange={() => dispatch({ type: "day", day: "fri" })}
                    />
                    <Checkbox
                        label='Saterday'
                        id='sat'
                        checked={state.sat}
                        onChange={() => dispatch({ type: "day", day: "sat" })}
                    />
                    <Checkbox
                        label='Sunday'
                        id='sun'
                        checked={state.sun}
                        onChange={() => dispatch({ type: "day", day: "sun" })}
                    />
                </div>
            </div>

            <div className='flex gap-2 justify-end w-full items-center'>
                {saveState.loading && <Spinner size={10} />}
                <Button label='Save' type='primary' onClick={saveHandler} />
                <Button label='Cancel' type='secondary' onClick={onClose} />
            </div>
        </div>
    );
};

export default Activity;
