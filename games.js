const axios = require('axios');

function invoice() {
    return `${Date.now()}${Math.floor(Math.random() * 10000)}`;
}

exports.createUser = async (req, res) => {
    const { username } = req.body;
    // Data yang akan dikirim ke API Nexus
    const requestData = {
        method: 'user_create',
        agent_code: 'delta888',
        agent_token: 'dc3b953b1f5623603e15008fd376dd6d',
        user_code: username,
    };

    try {
        const response = await axios.post('https://api.nexusggr.com', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(200).json({
            message: 'Failed to create user',
            error: error.response?.data || error.message,
        });
    }
};

exports.depositUser = async (req, res) => {
    const { username,amount } = req.body;
    // Data yang akan dikirim ke API Nexus
    const requestData = {
        "method": "user_deposit",
        "agent_code": "delta888",
        "agent_token": "dc3b953b1f5623603e15008fd376dd6d",
        "user_code": username,
        "amount": amount,
        "agent_sign": invoice()
    };

    try {
        const response = await axios.post('https://api.nexusggr.com', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(200).json({
            message: 'Failed to create user',
            error: error.response?.data || error.message,
        });
    }
};

exports.withdrawUser = async (req, res) => {
    const { username,amount } = req.body;
    // Data yang akan dikirim ke API Nexus
    const requestData = {
        "method": "user_withdraw",
        "agent_code": "delta888",
        "agent_token": "dc3b953b1f5623603e15008fd376dd6d",
        "user_code": username,
        "amount": amount,
        "agent_sign": invoice()
    };

    try {
        const response = await axios.post('https://api.nexusggr.com', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(200).json({
            message: 'Failed to create user',
            error: error.response?.data || error.message,
        });
    }
};

exports.playGames = async (req, res) => {
    const { username,provider,game } = req.body;
    const requestData = {
        "method": "game_launch",
        "agent_code": "delta888",
        "agent_token": "dc3b953b1f5623603e15008fd376dd6d",
        "user_code": username,
        "provider_code": provider,
        "game_code": game,
        "lang": 'id'
    };

    try {
        const response = await axios.post('https://api.nexusggr.com', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(200).json({
            message: 'Failed to create user',
            error: error.response?.data || error.message,
        });
    }
};

exports.historyGames = async (req, res) => {
    const { username,start,end } = req.body;
    const requestData = {
        "method": "get_game_log",
        "agent_code": "delta888",
        "agent_token": "dc3b953b1f5623603e15008fd376dd6d",
        "user_code": username,
        "game_type": "slot",
        "start": start+" 00:00:00",
        "end": end+" 23:59:00",
        "page": 0,
        "perPage": 1000
    };

    try {
        const response = await axios.post('https://api.nexusggr.com', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(200).json({
            message: 'Failed to create user',
            error: error.response?.data || error.message,
        });
    }
};