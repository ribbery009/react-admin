import React from 'react';
import { useNavigate } from "react-router-dom";

export const RedirectToUsers = () => {
    const navigate = useNavigate();
    navigate('/users')
};
