module.exports = function (requiredRole) {
    return function (req, res, next) {
      // Ensure req.user exists and contains the role
      if (!req.user || req.user.role !== requiredRole) {
        return res.status(403).json({ msg: 'Access denied: insufficient privileges' });
      }
  
      // If role matches, proceed
      next();
    };
  };
  