package com.eposp.simpletabreactnative;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.LinearLayout;


public class NativeActivity extends AppCompatActivity {

//    @BindView(R.id.activity_native)//和 reactnative一起使用有bug，导致启动不了rn页面
    LinearLayout mLayout;

    //    LinearLayout
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_native);
//        ButterKnife.bind(this);
        mLayout=(LinearLayout)findViewById(R.id.activity_native);
        onIntent();
    }

    public void onIntent() {
        mLayout.postDelayed(new Runnable() {
            @Override
            public void run() {
                Intent intent = new Intent(NativeActivity.this, MainActivity.class);
                startActivity(intent);
                finish();
            }
        }, 1500);
//        mLayout.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                                Intent intent = new Intent(NativeActivity.this, MainActivity.class);
//                startActivity(intent);
//            }
//        });
    }

}
