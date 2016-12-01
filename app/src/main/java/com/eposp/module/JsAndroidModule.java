package com.eposp.module;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by xqf on 2016/11/24.
 */

public class JsAndroidModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME="JsAndroid";
    private Context context;

    public JsAndroidModule(ReactApplicationContext reactContext) {
        super(reactContext);
        context=reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }
    @ReactMethod
    public void jsActivity(){
        Toast.makeText(context, "我是本地方法", Toast.LENGTH_SHORT).show();
    }
}
