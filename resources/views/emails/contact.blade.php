<!DOCTYPE html>
<html>
<head>
    <title>Nouveau Message de Contact</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2>Un nouveau prospect a rempli le formulaire sur le site :</h2>
    
    <p><strong>Nom :</strong> {{ $data['name'] }}</p>
    <p><strong>Email :</strong> {{ $data['email'] }}</p>
    
    <p><strong>Message :</strong></p>
    <div style="background: #f4f4f4; padding: 15px; border-left: 4px solid #3b82f6;">
        {{ nl2br(e($data['message'])) }}
    </div>

    <p style="font-size: 11px; color: #777; margin-top: 30px;">
        Cet email a été généré automatiquement par le site web Solutions IT Dakar.
    </p>
</body>
</html>
